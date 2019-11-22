package com.host;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.host.utils.DispatchUtils;

public class DispatchActivity extends ReactActivity {

    public static void start(Context context) {
        Intent starter = new Intent(context, DispatchActivity.class);
        starter.setAction(android.content.Intent.ACTION_DEFAULT);
        starter.addFlags(Intent.FLAG_ACTIVITY_NEW_DOCUMENT);
        starter.addFlags(Intent.FLAG_ACTIVITY_MULTIPLE_TASK);
        context.startActivity(starter);
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {

        DispatchDelegate    delegate = new DispatchDelegate(this, DispatchUtils.dispatchModel);

        return delegate;
    }
}
