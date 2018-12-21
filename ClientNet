package com.example.min10.myapplication;

import android.util.Log;

import com.github.nkzawa.socketio.client.IO;

import java.io.IOException;
import java.net.URISyntaxException;

public class ClientNet {
    private String ip = "192.168.1.194";//192.168.204.104";
    private int port = 3000;
    public static com.github.nkzawa.socketio.client.Socket mSocket = null;

    public ClientNet(){
        try{
            setSocket(ip,port);
        }catch (Exception e){e.printStackTrace();}
        connect();
    }

    public void connect(){
        mSocket.connect();
        Log.d("tests","mSocket Connect");
    }

    public void setSocket(String ip, int port) throws IOException, URISyntaxException {
        try {
            mSocket = IO.socket("http://" + ip + ":" + port);
            Log.d("tests", "mSocket Create" + " http://" + ip + ":" + port);
        } catch (Exception e) {
            System.out.println(e);
            e.printStackTrace();
        }
    }

    public void lightOn() {
        mSocket.emit("lightOn");

    }
}
