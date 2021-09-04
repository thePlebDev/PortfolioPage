const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if(process.env.NODE_ENV === "production"){
  mode = "production";
}

module.exports = {
  mode: mode,
  module:{
    rules:[
      {
        test:/\.(png|jpe?g|gif|svg)$/i,
        type:"asset",
      },
      {
        test:/\.s?css$/i,
        use:[
          {
            loader:MiniCssExtractPlugin.loader,
            options:{publicPath: ""},
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"],
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  },

  plugins:[new MiniCssExtractPlugin()],
  
  devtool:"source-map",
  devServer: {
    static:"./dist",
    hot:true,
    compress: true,
    port: 9000,
  },
};