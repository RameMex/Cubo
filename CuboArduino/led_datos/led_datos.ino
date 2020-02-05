#include <Adafruit_DotStar.h>
#include <SPI.h>
#include <I2Cdev.h>
#include <MPU6050.h>
#include <Wire.h>

#define NUMPIXELS 6 // Numero de LEDS

// Pines para control de LED
#define DATAPIN    4
#define CLOCKPIN   5
Adafruit_DotStar strip(NUMPIXELS, DATAPIN, CLOCKPIN, DOTSTAR_BGR);

//Libreria para la comunicacion bluetooth
#include <SoftwareSerial.h>
// Pines comunicacion Bluetooth
SoftwareSerial BT(2,3);

// La dirección del MPU6050 puede ser 0x68 o 0x69, dependiendo 
// del estado de AD0. Si no se especifica, 0x68 estará implicito
MPU6050 sensor;

const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];        // temporary array for use when parsing

// variables to hold the parsed data
byte cmd;
byte cmdLED;
unsigned long cmdColor;

boolean newData = false;

// Valores RAW (sin procesar) del acelerometro y giroscopio en los ejes x,y,z
int axf, ayf, azf;
int cont = 0;
String posicion = "";
String dato = "";

unsigned long previousMillis = 0;
const long interval = 250;

void setup() {
    strip.begin(); // Initialize pins for output
    strip.show();
  
    Serial.begin(115200);
//    Serial.println("Esta demo recibe comandos de la forma: ");
//    Serial.println("<cmd,LED,color>");
//    Serial.println();

	BT.begin(38400);    //Iniciando puerto serial
	Wire.begin();           //Iniciando I2C  
	sensor.initialize();    //Iniciando el sensor
}

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
            // this temporary copy is necessary to protect the original data
            //   because strtok() used in parseData() replaces the commas with \0
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
//        Serial.println();
    }
}

void bluetoothData() {
	// Leer las aceleraciones y velocidades angulares
	sensor.getAcceleration(&axf, &ayf, &azf);
	float ax = axf * (9.81/16384.0);
	float ay = ayf * (9.81/16384.0);
	float az = azf * (9.81/16384.0);

	if (ax > 9)
	{
		BT.println(3);
	}
	else if (ax < -8.5)
	{
		BT.println(2);
	}
	else if (ay < -9)
	{
		BT.println(5);
	}
	else if (ay > 9)
	{
		BT.println(1);
	}
	else if (az < -9)
	{
		BT.println(4);
	}
	else if (az > 9)
	{
		BT.println(6);
	}else
	{
		BT.println(0);
	}
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
