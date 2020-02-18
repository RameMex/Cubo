#include <Adafruit_DotStar.h>
#include <SPI.h>

#define NUMPIXELS 6 // Number of LEDs in strip

// Here's how to control the LEDs from any two pins:
#define DATAPIN    11
#define CLOCKPIN   13
Adafruit_DotStar strip(NUMPIXELS, DATAPIN, CLOCKPIN, DOTSTAR_BGR);

const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];        // temporary array for use when parsing

// variables to hold the parsed data
byte cmd;
byte cmdLED;
unsigned long cmdColor;

boolean newData = false;

void setup() {
    strip.begin(); // Initialize pins for output
    strip.show();
  
    Serial.begin(115200);
    Serial.println("Esta demo recibe comandos de la forma: ");
    Serial.println("<cmd,LED,color>");
    Serial.println();
}

void loop() {
    recvWithStartEndMarkers();
    if (newData == true) {
        strcpy(tempChars, receivedChars);
            // this temporary copy is necessary to protect the original data
            //   because strtok() used in parseData() replaces the commas with \0
        parseData();
        showParsedData();
        newData = false;

        if (cmd == 1){
          strip.setPixelColor(cmdLED, cmdColor);
          strip.show();
        } else if (cmd == 2){
          strip.setBrightness(cmdLED);
          strip.show();
        }
        Serial.println();
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
