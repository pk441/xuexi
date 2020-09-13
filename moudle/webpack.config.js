/*
* @Author: lipan
* @Date:   2020-09-13 10:32:51
* @Last Modified by:   李盼和岳聪
* @Last Modified time: 2020-09-13 10:53:27
*/
const path=require('path')
module.exports=function(){
	const dev=true;
	return {
		mode:dev?'development':'production',
		entry:'./src/index.js',
		output:{
			path:path.resolve(__dirname,'dist'),
			filename:dev?'boundle.js':'boundle.min.js',
			sourceMapFilename:dev?'boundle.map':'boundle.min.map',
			libraryTarget:'umd'//输出是一个模块
		},
}
}