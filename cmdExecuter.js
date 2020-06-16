const EventEmitter = require('events');

const { spawn } = require('child_process');

module.exports = CmdExecutor;
function CmdExecutor(cmd,param){
	if (!(this instanceof CmdExecutor)) return new CmdExecutor(cmd,param);
	//this.emiter = new EventEmitter();
	this.cmd=cmd;
	this.param=param;
	return this;
};

CmdExecutor.prototype.exe=function(dataCB,errorCB,endCB){
	const command = spawn(this.cmd, this.param);
	command.stdout.on('data', (data) => {
			dataCB(data.toString());
	});

	command.stderr.on('data', (data) => {
			errorCB(data.toString());
	});

	command.on('close', (code) => {
		endCB(code);
	});
}
CmdExecutor.prototype.close=function(){
	const command = spawn(this.cmd, this.param);
	
}

