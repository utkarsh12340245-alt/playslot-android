# PlaySlot Android

This repository builds a **debug/testing APK** that opens the existing PlaySlot website inside an Android Capacitor shell.

## App details
- App name: PlaySlot
- Android application ID: `in.playslot.app`
- Website: https://playslot-br1ahi.v2.appdeploy.ai/
- Internet connection is required.

## Build the APK
1. Upload all files and folders in this ZIP to the root of your GitHub repository.
2. Make sure the workflow file is at `.github/workflows/build-android-apk.yml`.
3. Open the **Actions** tab in the repository.
4. Select **Build PlaySlot Android APK**.
5. Tap **Run workflow** and confirm.
6. Wait for the workflow to finish successfully.
7. Open the completed run and download the `PlaySlot-Testing-APK` artifact.
8. Extract the downloaded ZIP. The APK is `app-debug.apk`.

The workflow also runs automatically when commits are pushed to the `main` branch.

## Important
This is a debug/testing APK, not a signed Play Store release. Test sign-in, navigation, booking and cancellation on a real Android device. The app loads the live website, so website availability and internet access are required.

A production Play Store release needs a properly protected signing key and a signed Android App Bundle (AAB). Do not commit signing keys, passwords, payment secrets or API credentials to this repository.
