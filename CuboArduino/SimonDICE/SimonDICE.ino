// Librerias I2C para controlar el mpu6050
// la libreria MPU6050.h necesita I2Cdev.h, I2Cdev.h necesita Wire.h
#include "I2Cdev.h"
#include "MPU6050.h"
#include "Wire.h"

//Libreria para la comunicacion bluetooth
#include <SoftwareSerial.h>
SoftwareSerial BT(2,3);

// La dirección del MPU6050 puede ser 0x68 o 0x69, dependiendo 
// del estado de AD0. Si no se especifica, 0x68 estará implicito
MPU6050 sensor;

//Pines Shift register para leds rojos
const int latchPinr = 8;  // Pin conectado al Pin 12 del 74HC595 (Latch)
const int dataPinr  = 11;  // Pin conectado al Pin 14 del 74HC595 (Data)
const int clockPinr = 12; // Pin conectado al Pin 11 del 74HC595 (Clock)
//Pines Shift register para leds verdes
const int latchPinv = 7;  // Pin conectado al Pin 12 del 74HC595 (Latch)
const int dataPinv  = 9;  // Pin conectado al Pin 14 del 74HC595 (Data)
const int clockPinv = 10; // Pin conectado al Pin 11 del 74HC595 (Clock)
//Pines Shift register para leds azules
const int latchPina = 4;  // Pin conectado al Pin 12 del 74HC595 (Latch)
const int dataPina  = 5;  // Pin conectado al Pin 14 del 74HC595 (Data)
const int clockPina = 6; // Pin conectado al Pin 11 del 74HC595 (Clock)

int verde = 0b00000000;
int azul = 0b00000000;   
int rojo = 0b00000000;    
const int c0 = 0b00000000;              
const int c1 = 0b10000000; 
const int c2 = 0b01000000; 
const int c3 = 0b00100000; 
const int c4 = 0b00010000; 
const int c5 = 0b00001000; 
const int c6 = 0b00000100; 

// Valores RAW (sin procesar) del acelerometro y giroscopio en los ejes x,y,z
int axf, ayf, azf;
int cont = 0;
String posicion = "";
String dato = "";

void setup() {
  //Pines de los ShiftRegister
  pinMode(latchPinr, OUTPUT);
  pinMode(clockPinr, OUTPUT);
  pinMode(dataPinr, OUTPUT); 
  pinMode(latchPinv, OUTPUT);
  pinMode(clockPinv, OUTPUT);
  pinMode(dataPinv, OUTPUT);
  pinMode(latchPina, OUTPUT);
  pinMode(clockPina, OUTPUT);
  pinMode(dataPina, OUTPUT);
  
  BT.begin(38400);    //Iniciando puerto serial
  Wire.begin();           //Iniciando I2C  
  sensor.initialize();    //Iniciando el sensor
}

void loop() {
  // Leer las aceleraciones y velocidades angulares
  sensor.getAcceleration(&axf, &ayf, &azf);
  float ax = axf * (9.81/16384.0);
  float ay = ayf * (9.81/16384.0);
  float az = azf * (9.81/16384.0);
  //Mostrar las lecturas separadas por un [tab]
  //Serial.print("a[x y z](m/s2):\t");
  //Serial.print(ax_m_s2); Serial.print("\t");
  //Serial.print(ay_m_s2); Serial.print("\t");
  //Serial.println(az_m_s2); Serial.print("\t");
  digitalWrite(latchPinr, LOW);
  shiftOut(dataPinr, clockPinr, LSBFIRST, rojo);
  digitalWrite(latchPinr, HIGH);
  digitalWrite(latchPinv, LOW);
  shiftOut(dataPinv, clockPinv, LSBFIRST, verde);
  digitalWrite(latchPinv, HIGH);
  digitalWrite(latchPina, LOW);
  shiftOut(dataPina, clockPina, LSBFIRST, azul);
  digitalWrite(latchPina, HIGH);

  rojo = c1 + c2 + c4;
  verde = c1 + c4 + c5;
  azul = c2 + c4 + c6;
  
  if (ax > 9){
    //Rojo
    BT.println(3);
  }
  else if (ax < -8.5){
    //Azul
    BT.println(2);
  }
  else if (ay < -9){
    //Ambar
    BT.println(5);
  }
  else if (ay > 9){
    //Verde
    BT.println(1);
  }
  else if (az < -9){
    //Cyan
    BT.println(4);
  }
  else if (az > 9){
    //Magenta
    BT.println(6);
  }else{
    //Sin cara arriba
    BT.println(0);
  }

    
  //rojo = c1 + c4 + c5;
  //verde = c2 + c4 + c6;
  //azul = c3 + c5 + c6;
  /*  if (ax > 8){
    cont = cont + 1;
    if(cont > 7){
      posicion = "1";
    }
  }else if (ax < -8){
    cont = cont + 1;
    if(cont > 7){
      posicion = "2";
    }
  }else if (ay < -8){
    cont = cont + 1;
    if(cont > 7){
      posicion = "3";
    }
  }else if (ay > 8){
    cont = cont + 1;
    if(cont > 7){
      posicion = "4";
    }
  }else if (az < -8){
    cont = cont + 1;
    if(cont > 7){
      posicion = "5";
    }
  }else if (az > 8){
    cont = cont + 1;
    if(cont > 7){
      posicion = "6";
    }
  }else{
    cont = 0;
  }
  
  Serial.print(posicion);
  /*
  if(Serial.available() > 0){
    dato = Serial.read();
  }
  */
  delay(250);
}
 
