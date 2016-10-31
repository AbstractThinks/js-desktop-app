const electron = require('electron');
// 控制应用生命周期的模块
const { app } = electron;
// 创建本地浏览器窗口的模块
const { BrowserWindow } = electron;


let win;

createWindow => {
	// 创建一个新的浏览器窗口
	win = new BrowserWindow({ width: 800, height: 600 });
	// 装在应用的index.html
	win = loadURL(`file://${__dirname}/index.html`);

	// 打开开发工具页面
	win.webContents.openDevTools();

	// 当窗口关闭时调用
	win.on('closed', () => {
		win = null;
	})
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if ( process.platform !== 'drawin' ) {
		app.quit();
	}
})

app.on('activate', () => {
	if (win === null) {
	    createWindow();
	}
})
