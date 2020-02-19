/*********************
 *     Librerias     *
 *********************/
#include <Adafruit_DotStar.h>
#include <SPI.h>
#include <I2Cdev.h>
#include <MPU6050.h>
#include <Wire.h>
#include <SoftwareSerial.h>

/**********************
 *     Constantes     *
 **********************/
#define NUMPIXELS 6 // Numero de LEDS

// Pines para control de LED
#define DATAPIN    11
#define CLOCKPIN   13

/************************
 *     Definiciones     *
 ***********************/
MPU6050 sensor;
SoftwareSerial BT(2,3);
Adafruit_DotStar strip(NUMPIXELS, DATAPIN, CLOCKPIN, DOTSTAR_BGR);

/*********************
 *     Variables     *
 *********************/
// Variables recepcion comunicacion serial
const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];
boolean newData = false;

// Variables comandos interpretados
byte cmd;
byte cmdLED;
unsigned long cmdColor;

// Valores RAW (sin procesar) del acelerometro y giroscopio en los ejes x,y,z
int ax, ay, az;
int gx, gy, gz;

long tiempo_prev;
float dt;
float ang_x, ang_y,ang_z;
float ang_x_prev, ang_y_prev,ang_z_prev;

// Variables intervalo envio de datos BT
unsigned long previousMillis = 0;
const int interval = 100;

/*****************
 *     setup     *
 *****************/
void setup() {
//	Inicia la tira de LEDs
    strip.begin();
    strip.show();

//	Comunicacion Serial
    Serial.begin(115200);

//	Comunicacion serial con BT
	BT.begin(38400);

//	Comunicacion I2C con sensor MPU
	Wire.begin();
	sensor.initialize();
	if (sensor.testConnection()) Serial.println("Sensor iniciado correctamente");
  	else Serial.println("Error al iniciar el sensor");
}

/****************
 *     Loop     *
*****************/
void loop() {
    recvWithStartEndMarkers();

	unsigned long currentMillis = millis();
	if (currentMillis - previousMillis >= interval)
	{
		previousMillis = currentMillis;
		bluetoothData();
	}
    
    if (newData == true) {
        strcpy(tempChars, receivedChars);
        parseData();
        showParsedData();
        newData = false;

		// Procesado de comandos recibidos
        if (cmd == 1){
          strip.setPixelColor(cmdLED, cmdColor);
          strip.show();
        } else if (cmd == 2){
          strip.setBrightness(cmdLED);
          strip.show();
        }
    }
}

/****************************
 *     Helper functions     *
 ****************************/
// Envio datos Bluethoot
void bluetoothData() {
	// Leer las aceleraciones y velocidades angulares
	sensor.getAcceleration(&ax, &ay, &az);
	sensor.getRotation(&gx, &gy, &gz);

	dt = (millis()-tiempo_prev)/1000.0;
	tiempo_prev=millis();
	
	//Calcular los ángulos con acelerometro
	float accel_ang_x=atan(ay/sqrt(pow(ax,2) + pow(az,2)))*(180.0/3.14);
	float accel_ang_y=atan(-ax/sqrt(pow(ay,2) + pow(az,2)))*(180.0/3.14);
	float accel_ang_z=atan(sqrt(pow(ay,2) + pow(az,2))/(az))*(180.0/3.14);
	
	//Calcular angulo de rotación con giroscopio y filtro complemento  
	ang_x = 0.98*(ang_x_prev+(gx/131)*dt) + 0.02*accel_ang_x;
	ang_y = 0.98*(ang_y_prev+(gy/131)*dt) + 0.02*accel_ang_y;
	ang_z = 0.98*(ang_z_prev+(gz/131)*dt) + 0.02*accel_ang_z;
	
	ang_x_prev=ang_x;
	ang_y_prev=ang_y;
	ang_z_prev=ang_z;
	
	Serial.print(ang_x);
	Serial.print("\n");
	Serial.print(ang_y); 
	Serial.print("\n");
	Serial.print(ang_z); 
	Serial.print("\n");
}

void recvWithStartEndMarkers() {
    static boolean recvInProgress = false;
    static byte ndx = 0;
    char startMarker = '<';
    char endMarker = '>';
    char rc;

    while (Serial.available() > 0 && newData == false) {
        rc = Serial.read();

        if (recvInProgress == true) {
            if (rc != endMarker) {
                receivedChars[ndx] = rc;
                ndx++;
                if (ndx >= numChars) {
                    ndx = numChars - 1;
                }
            }
            else {
                receivedChars[ndx] = '\0'; // terminate the string
                recvInProgress = false;
                ndx = 0;
                newData = true;
            }
        }

        else if (rc == startMarker) {
            recvInProgress = true;
        }
    }
}

void parseData() {      // split the data into its parts
    char * strtokIndx; // this is used by strtok() as an index

    strtokIndx = strtok(tempChars,",");
    cmd = atoi(strtokIndx);
 
    strtokIndx = strtok(NULL, ",");
    cmdLED = atoi(strtokIndx);

    strtokIndx = strtok(NULL, ",");
    cmdColor = strtoul(strtokIndx, NULL, 0);
}

void showParsedData() {
    Serial.print("Comando: ");
    Serial.println(cmd);
    Serial.print("LED a modificar: ");
    Serial.println(cmdLED);
    Serial.print("Color seleccionado: ");
    Serial.println(cmdColor);
}
