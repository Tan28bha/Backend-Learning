import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Pleae turn off the motor!');
  setTimeout(() => {
    console.log("Gentle Reminder")
  }, 3000);
});
myEmitter.emit('WaterFull');