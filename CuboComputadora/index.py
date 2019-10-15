from __future__ import print_function	# For Py2/3 compatibility
import eel

eel.init('web')                     # Give folder containing web files

@eel.expose                       # Expose this function to Javascript
def handleinput(x):
    print('%s' % x)
eel.say_hello_js('connected!')   # Call a Javascript function

eel.start('index.html', size=(1300, 800),mode='chrome-app')    # Start #anchura altura 