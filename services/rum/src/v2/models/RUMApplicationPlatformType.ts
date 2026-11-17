import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the RUM application, that is the platform of the RUM SDK. Defaults to `browser` on create.
 */
export type RUMApplicationPlatformType =
  | typeof BROWSER
  | typeof IOS
  | typeof ANDROID
  | typeof REACT_NATIVE
  | typeof FLUTTER
  | typeof ROKU
  | typeof ELECTRON
  | typeof UNITY
  | typeof KOTLIN_MULTIPLATFORM
  | typeof REACT
  | typeof NEXTJS
  | typeof ANGULAR
  | typeof VUEJS
  | typeof NUXT
  | typeof TANSTACK
  | typeof MAUI
  | typeof SALESFORCE_LWC
  | typeof SHOPIFY
  | typeof CPP
  | typeof UNREAL
  | UnparsedObject;
export const BROWSER = "browser";
export const IOS = "ios";
export const ANDROID = "android";
export const REACT_NATIVE = "react-native";
export const FLUTTER = "flutter";
export const ROKU = "roku";
export const ELECTRON = "electron";
export const UNITY = "unity";
export const KOTLIN_MULTIPLATFORM = "kotlin-multiplatform";
export const REACT = "react";
export const NEXTJS = "nextjs";
export const ANGULAR = "angular";
export const VUEJS = "vuejs";
export const NUXT = "nuxt";
export const TANSTACK = "tanstack";
export const MAUI = "maui";
export const SALESFORCE_LWC = "salesforce-lwc";
export const SHOPIFY = "shopify";
export const CPP = "cpp";
export const UNREAL = "unreal";
