/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The device ID.
 */

export type SyntheticsMobileDeviceID =
  | typeof APPLE_IPAD__2022__16_4
  | typeof APPLE_IPAD__2022__17_3_1
  | typeof APPLE_IPAD_7TH_GEN__2019__13_3
  | typeof APPLE_IPAD_9TH_GEN__2021__15_0_2
  | typeof APPLE_IPAD_9TH_GEN__2021__16_1
  | typeof APPLE_IPAD_AIR__2022__15_4_1
  | typeof APPLE_IPAD_MINI__5TH_GEN__14_6
  | typeof APPLE_IPAD_MINI__6TH_GEN__15_1
  | typeof APPLE_IPAD_PRO_11__2022__16_3
  | typeof APPLE_IPAD_PRO_12_9__2020__14_8
  | typeof APPLE_IPAD_PRO_12_9__2021__15_6_1
  | typeof APPLE_IPAD_PRO_12_9__2022__16_5
  | typeof APPLE_IPHONE_11_PRO_MAX_13_1_3
  | typeof APPLE_IPHONE_11_PRO_13_6
  | typeof APPLE_IPHONE_11_PRO_15_5
  | typeof APPLE_IPHONE_11_13_3_1
  | typeof APPLE_IPHONE_11_14_0
  | typeof APPLE_IPHONE_11_16_3
  | typeof APPLE_IPHONE_12_MINI_14_2
  | typeof APPLE_IPHONE_12_MINI_16_5
  | typeof APPLE_IPHONE_12_PRO_MAX_14_5_1
  | typeof APPLE_IPHONE_12_PRO_14_5_1
  | typeof APPLE_IPHONE_12_PRO_14_8
  | typeof APPLE_IPHONE_12_PRO_15_0_2
  | typeof APPLE_IPHONE_12_PRO_16_2
  | typeof APPLE_IPHONE_12_14_2
  | typeof APPLE_IPHONE_12_14_6
  | typeof APPLE_IPHONE_12_14_8
  | typeof APPLE_IPHONE_12_15_6_1
  | typeof APPLE_IPHONE_12_16_6_1
  | typeof APPLE_IPHONE_13_MINI_15_0_2
  | typeof APPLE_IPHONE_13_MINI_16_6
  | typeof APPLE_IPHONE_13_PRO_MAX_15_1
  | typeof APPLE_IPHONE_13_PRO_MAX_17_3
  | typeof APPLE_IPHONE_13_PRO_15_0_2
  | typeof APPLE_IPHONE_13_PRO_15_2
  | typeof APPLE_IPHONE_14_PLUS_16_1
  | typeof APPLE_IPHONE_14_PRO_MAX_16_2
  | typeof APPLE_IPHONE_14_PRO_16_1
  | typeof APPLE_IPHONE_14_PRO_17_3_1
  | typeof APPLE_IPHONE_14_16_1
  | typeof APPLE_IPHONE_15_PRO_MAX_17_3_1
  | typeof APPLE_IPHONE_15_PRO_17_3_1
  | typeof APPLE_IPHONE_15_17_2_1
  | typeof APPLE_IPHONE_SE__2022__15_4_1
  | typeof GALAXY_A40_9
  | typeof GALAXY_A5_8_0_0
  | typeof GALAXY_NOTE_10_9
  | typeof GALAXY_NOTE5__AT_T__7_0
  | typeof GALAXY_S10_9
  | typeof GALAXY_S6_EDGE_SMNOT_G925F_7_0
  | typeof GALAXY_S8__TNOT_MOBILE__8_0_0
  | typeof GALAXY_S8_UNLOCKED_8_0_0
  | typeof GALAXY_S9__UNLOCKED__9
  | typeof GALAXY_S9___UNLOCKED__8_0_0
  | typeof GALAXY_S9___UNLOCKED__9
  | typeof GOOGLE_PIXEL_2_8_0_0
  | typeof GOOGLE_PIXEL_2_9
  | typeof GOOGLE_PIXEL_3_XL_10
  | typeof GOOGLE_PIXEL_3_XL_9
  | typeof GOOGLE_PIXEL_3_10
  | typeof GOOGLE_PIXEL_3_9
  | typeof GOOGLE_PIXEL_3A_XL_11
  | typeof GOOGLE_PIXEL_3A_XL_12
  | typeof GOOGLE_PIXEL_3A_10
  | typeof GOOGLE_PIXEL_4__UNLOCKED__10
  | typeof GOOGLE_PIXEL_4__UNLOCKED__11
  | typeof GOOGLE_PIXEL_4_XL__UNLOCKED__10
  | typeof GOOGLE_PIXEL_4A_11
  | typeof GOOGLE_PIXEL_4A_12
  | typeof GOOGLE_PIXEL_5A_5G_12
  | typeof GOOGLE_PIXEL_6_PRO_12
  | typeof GOOGLE_PIXEL_6_12
  | typeof GOOGLE_PIXEL_6A_13
  | typeof GOOGLE_PIXEL_7_PRO_13
  | typeof GOOGLE_PIXEL_7_13
  | typeof GOOGLE_PIXEL_7_14
  | typeof GOOGLE_PIXEL_8_PRO_14
  | typeof GOOGLE_PIXEL_8_14
  | typeof IPAD_8TH_GEN__2020__14_8
  | typeof IPAD_AIR_2_13_6
  | typeof IPAD_AIR_4TH_GEN__2020__14_8
  | typeof IPHONE_13_15_0_2
  | typeof IPHONE_13_16_0_2
  | typeof IPHONE_6_12_5_4
  | typeof IPHONE_6S_14_4_2
  | typeof IPHONE_7_14_8
  | typeof IPHONE_8_13_5_1
  | typeof IPHONE_8_14_4_2
  | typeof IPHONE_SE__2020__13_6
  | typeof IPHONE_SE__2020__14_6
  | typeof IPHONE_SE__2020__15_0_2
  | typeof IPHONE_X_14_6
  | typeof IPHONE_XR_12_0
  | typeof IPHONE_XR_14_0
  | typeof IPHONE_XS_MAX_12_1
  | typeof IPHONE_XS_13_6
  | typeof LG_STYLO_5_9
  | typeof LG_STYLO_6_10
  | typeof MOTO_G_4_7_0
  | typeof MOTO_G7_PLAY_9
  | typeof NEXUS_7_NOT__2ND_GEN__WIFI__6_0
  | typeof ONEPLUS_8T_11
  | typeof PIXEL_2_XL_8_1_0
  | typeof PIXEL_2_XL_9
  | typeof PIXEL_5_11
  | typeof PIXEL_5_12
  | typeof PIXEL_XL_8_0_0
  | typeof PIXEL_7_1_2
  | typeof SAMSUNG_A51_10
  | typeof SAMSUNG_GALAXY_A10S_10
  | typeof SAMSUNG_GALAXY_A13_5G_11
  | typeof SAMSUNG_GALAXY_A53_5G_12
  | typeof SAMSUNG_GALAXY_A7_8_0_0
  | typeof SAMSUNG_GALAXY_A71_11
  | typeof SAMSUNG_GALAXY_A73_5G_12
  | typeof SAMSUNG_GALAXY_J7__2018__8_0_0
  | typeof SAMSUNG_GALAXY_NOTE20_11
  | typeof SAMSUNG_GALAXY_S20__UNLOCKED__10
  | typeof SAMSUNG_GALAXY_S20___UNLOCKED__10
  | typeof SAMSUNG_GALAXY_S21_ULTRA_11
  | typeof SAMSUNG_GALAXY_S21_ULTRA_12
  | typeof SAMSUNG_GALAXY_S21__11
  | typeof SAMSUNG_GALAXY_S21_11
  | typeof SAMSUNG_GALAXY_S21_12
  | typeof SAMSUNG_GALAXY_S22_5G_12
  | typeof SAMSUNG_GALAXY_S22_5G_13
  | typeof SAMSUNG_GALAXY_S22_ULTRA_5G_12
  | typeof SAMSUNG_GALAXY_S22__5G_12
  | typeof SAMSUNG_GALAXY_S23_ULTRA_13
  | typeof SAMSUNG_GALAXY_S23__13
  | typeof SAMSUNG_GALAXY_S23_13
  | typeof SAMSUNG_GALAXY_S23_14
  | typeof SAMSUNG_GALAXY_TAB_A_10_1_10
  | typeof SAMSUNG_GALAXY_TAB_A_10_1_7_0
  | typeof SAMSUNG_GALAXY_TAB_A8__2021__11
  | typeof SAMSUNG_GALAXY_TAB_S4_8_1_0
  | typeof SAMSUNG_GALAXY_TAB_S6_9
  | typeof SAMSUNG_GALAXY_TAB_S7_11
  | typeof SAMSUNG_GALAXY_TAB_S8_12
  | typeof SAMSUNG_S20_ULTRA_10
  | typeof SONY_XPERIA_XZ3_9
  | typeof XIAOMI_REDMI_NOTE_10_5G_11
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_10TH_GEN_2022_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_10TH_GEN_2022_IOS_17
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_9TH_GEN_2021_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_AIR_2022_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_MINI_5TH_GEN_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_MINI_6TH_GEN_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_11_2022_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_12_9_2020_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_12_9_2021_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_12_9_2022_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_11_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_11_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_11_PRO_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_MINI_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_MINI_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_PRO_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_PRO_MAX_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_MINI_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_MINI_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_PRO_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_PRO_MAX_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_PRO_MAX_IOS_17
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PLUS_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PRO_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PRO_IOS_17
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PRO_MAX_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_6_IOS_12
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_8_IOS_13
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_8_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_SE_2022_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_SE_2022_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_GALAXY_A5_ANDROID_8
  | typeof SYNTHETICS_MOBILE_DEVICE_GALAXY_NOTE5_ANDROID_7
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_3A_XL_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_4_UNLOCKED_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_4_XL_UNLOCKED_ANDROID_10
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_4A_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_6_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_6_PRO_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_6A_ANDROID_13
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_7_ANDROID_13
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_7_ANDROID_14
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_7_PRO_ANDROID_13
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_8_ANDROID_14
  | typeof SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_8_PRO_ANDROID_14
  | typeof SYNTHETICS_MOBILE_DEVICE_IPAD_AIR_2_IOS_13
  | typeof SYNTHETICS_MOBILE_DEVICE_IPAD_AIR_4TH_GEN_2020_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_13_IOS_15
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_13_IOS_16
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_15_IOS_17
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_15_PRO_IOS_17
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_15_PRO_MAX_IOS_17
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_SE_2020_IOS_13
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_SE_2020_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_X_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_XR_IOS_14
  | typeof SYNTHETICS_MOBILE_DEVICE_IPHONE_XS_IOS_13
  | typeof SYNTHETICS_MOBILE_DEVICE_LG_STYLO_6_ANDROID_10
  | typeof SYNTHETICS_MOBILE_DEVICE_PIXEL_5_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_A51_ANDROID_10
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_A71_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_NOTE20_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_PLUS_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_ULTRA_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_5G_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_5G_ANDROID_13
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_PLUS_5G_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_ULTRA_5G_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_ANDROID_13
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_ANDROID_14
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_PLUS_ANDROID_13
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_PLUS_ANDROID_14
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_ULTRA_ANDROID_13
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_TAB_A_10_1_ANDROID_7
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_TAB_S7_ANDROID_11
  | typeof SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_TAB_S8_ANDROID_12
  | typeof SYNTHETICS_MOBILE_DEVICE_XIAOMI_REDMI_NOTE_10_5G_ANDROID_11
  | UnparsedObject;
export const APPLE_IPAD__2022__16_4 = "apple ipad (2022),16.4";
export const APPLE_IPAD__2022__17_3_1 = "apple ipad (2022),17.3.1";
export const APPLE_IPAD_7TH_GEN__2019__13_3 = "apple ipad 7th gen (2019),13.3";
export const APPLE_IPAD_9TH_GEN__2021__15_0_2 =
  "apple ipad 9th gen (2021),15.0.2";
export const APPLE_IPAD_9TH_GEN__2021__16_1 = "apple ipad 9th gen (2021),16.1";
export const APPLE_IPAD_AIR__2022__15_4_1 = "apple ipad air (2022),15.4.1";
export const APPLE_IPAD_MINI__5TH_GEN__14_6 = "apple ipad mini (5th gen),14.6";
export const APPLE_IPAD_MINI__6TH_GEN__15_1 = "apple ipad mini (6th gen),15.1";
export const APPLE_IPAD_PRO_11__2022__16_3 = "apple ipad pro 11 (2022),16.3";
export const APPLE_IPAD_PRO_12_9__2020__14_8 =
  "apple ipad pro 12.9 (2020),14.8";
export const APPLE_IPAD_PRO_12_9__2021__15_6_1 =
  "apple ipad pro 12.9 (2021),15.6.1";
export const APPLE_IPAD_PRO_12_9__2022__16_5 =
  "apple ipad pro 12.9 (2022),16.5";
export const APPLE_IPHONE_11_PRO_MAX_13_1_3 = "apple iphone 11 pro max,13.1.3";
export const APPLE_IPHONE_11_PRO_13_6 = "apple iphone 11 pro,13.6";
export const APPLE_IPHONE_11_PRO_15_5 = "apple iphone 11 pro,15.5";
export const APPLE_IPHONE_11_13_3_1 = "apple iphone 11,13.3.1";
export const APPLE_IPHONE_11_14_0 = "apple iphone 11,14.0";
export const APPLE_IPHONE_11_16_3 = "apple iphone 11,16.3";
export const APPLE_IPHONE_12_MINI_14_2 = "apple iphone 12 mini,14.2";
export const APPLE_IPHONE_12_MINI_16_5 = "apple iphone 12 mini,16.5";
export const APPLE_IPHONE_12_PRO_MAX_14_5_1 = "apple iphone 12 pro max,14.5.1";
export const APPLE_IPHONE_12_PRO_14_5_1 = "apple iphone 12 pro,14.5.1";
export const APPLE_IPHONE_12_PRO_14_8 = "apple iphone 12 pro,14.8";
export const APPLE_IPHONE_12_PRO_15_0_2 = "apple iphone 12 pro,15.0.2";
export const APPLE_IPHONE_12_PRO_16_2 = "apple iphone 12 pro,16.2";
export const APPLE_IPHONE_12_14_2 = "apple iphone 12,14.2";
export const APPLE_IPHONE_12_14_6 = "apple iphone 12,14.6";
export const APPLE_IPHONE_12_14_8 = "apple iphone 12,14.8";
export const APPLE_IPHONE_12_15_6_1 = "apple iphone 12,15.6.1";
export const APPLE_IPHONE_12_16_6_1 = "apple iphone 12,16.6.1";
export const APPLE_IPHONE_13_MINI_15_0_2 = "apple iphone 13 mini,15.0.2";
export const APPLE_IPHONE_13_MINI_16_6 = "apple iphone 13 mini,16.6";
export const APPLE_IPHONE_13_PRO_MAX_15_1 = "apple iphone 13 pro max,15.1";
export const APPLE_IPHONE_13_PRO_MAX_17_3 = "apple iphone 13 pro max,17.3";
export const APPLE_IPHONE_13_PRO_15_0_2 = "apple iphone 13 pro,15.0.2";
export const APPLE_IPHONE_13_PRO_15_2 = "apple iphone 13 pro,15.2";
export const APPLE_IPHONE_14_PLUS_16_1 = "apple iphone 14 plus,16.1";
export const APPLE_IPHONE_14_PRO_MAX_16_2 = "apple iphone 14 pro max,16.2";
export const APPLE_IPHONE_14_PRO_16_1 = "apple iphone 14 pro,16.1";
export const APPLE_IPHONE_14_PRO_17_3_1 = "apple iphone 14 pro,17.3.1";
export const APPLE_IPHONE_14_16_1 = "apple iphone 14,16.1";
export const APPLE_IPHONE_15_PRO_MAX_17_3_1 = "apple iphone 15 pro max,17.3.1";
export const APPLE_IPHONE_15_PRO_17_3_1 = "apple iphone 15 pro,17.3.1";
export const APPLE_IPHONE_15_17_2_1 = "apple iphone 15,17.2.1";
export const APPLE_IPHONE_SE__2022__15_4_1 = "apple iphone se (2022),15.4.1";
export const GALAXY_A40_9 = "galaxy a40,9";
export const GALAXY_A5_8_0_0 = "galaxy a5,8.0.0";
export const GALAXY_NOTE_10_9 = "galaxy note 10,9";
export const GALAXY_NOTE5__AT_T__7_0 = "galaxy note5 (at&t),7.0";
export const GALAXY_S10_9 = "galaxy s10,9";
export const GALAXY_S6_EDGE_SMNOT_G925F_7_0 = "galaxy s6 edge sm-g925f,7.0";
export const GALAXY_S8__TNOT_MOBILE__8_0_0 = "galaxy s8 (t-mobile),8.0.0";
export const GALAXY_S8_UNLOCKED_8_0_0 = "galaxy s8 unlocked,8.0.0";
export const GALAXY_S9__UNLOCKED__9 = "galaxy s9 (unlocked),9";
export const GALAXY_S9___UNLOCKED__8_0_0 = "galaxy s9+ (unlocked),8.0.0";
export const GALAXY_S9___UNLOCKED__9 = "galaxy s9+ (unlocked),9";
export const GOOGLE_PIXEL_2_8_0_0 = "google pixel 2,8.0.0";
export const GOOGLE_PIXEL_2_9 = "google pixel 2,9";
export const GOOGLE_PIXEL_3_XL_10 = "google pixel 3 xl,10";
export const GOOGLE_PIXEL_3_XL_9 = "google pixel 3 xl,9";
export const GOOGLE_PIXEL_3_10 = "google pixel 3,10";
export const GOOGLE_PIXEL_3_9 = "google pixel 3,9";
export const GOOGLE_PIXEL_3A_XL_11 = "google pixel 3a xl,11";
export const GOOGLE_PIXEL_3A_XL_12 = "google pixel 3a xl,12";
export const GOOGLE_PIXEL_3A_10 = "google pixel 3a,10";
export const GOOGLE_PIXEL_4__UNLOCKED__10 = "google pixel 4 (unlocked),10";
export const GOOGLE_PIXEL_4__UNLOCKED__11 = "google pixel 4 (unlocked),11";
export const GOOGLE_PIXEL_4_XL__UNLOCKED__10 =
  "google pixel 4 xl (unlocked),10";
export const GOOGLE_PIXEL_4A_11 = "google pixel 4a,11";
export const GOOGLE_PIXEL_4A_12 = "google pixel 4a,12";
export const GOOGLE_PIXEL_5A_5G_12 = "google pixel 5a 5g,12";
export const GOOGLE_PIXEL_6_PRO_12 = "google pixel 6 pro,12";
export const GOOGLE_PIXEL_6_12 = "google pixel 6,12";
export const GOOGLE_PIXEL_6A_13 = "google pixel 6a,13";
export const GOOGLE_PIXEL_7_PRO_13 = "google pixel 7 pro,13";
export const GOOGLE_PIXEL_7_13 = "google pixel 7,13";
export const GOOGLE_PIXEL_7_14 = "google pixel 7,14";
export const GOOGLE_PIXEL_8_PRO_14 = "google pixel 8 pro,14";
export const GOOGLE_PIXEL_8_14 = "google pixel 8,14";
export const IPAD_8TH_GEN__2020__14_8 = "ipad 8th gen (2020),14.8";
export const IPAD_AIR_2_13_6 = "ipad air 2,13.6";
export const IPAD_AIR_4TH_GEN__2020__14_8 = "ipad air 4th gen (2020),14.8";
export const IPHONE_13_15_0_2 = "iphone 13,15.0.2";
export const IPHONE_13_16_0_2 = "iphone 13,16.0.2";
export const IPHONE_6_12_5_4 = "iphone 6,12.5.4";
export const IPHONE_6S_14_4_2 = "iphone 6s,14.4.2";
export const IPHONE_7_14_8 = "iphone 7,14.8";
export const IPHONE_8_13_5_1 = "iphone 8,13.5.1";
export const IPHONE_8_14_4_2 = "iphone 8,14.4.2";
export const IPHONE_SE__2020__13_6 = "iphone se (2020),13.6";
export const IPHONE_SE__2020__14_6 = "iphone se (2020),14.6";
export const IPHONE_SE__2020__15_0_2 = "iphone se (2020),15.0.2";
export const IPHONE_X_14_6 = "iphone x,14.6";
export const IPHONE_XR_12_0 = "iphone xr,12.0";
export const IPHONE_XR_14_0 = "iphone xr,14.0";
export const IPHONE_XS_MAX_12_1 = "iphone xs max,12.1";
export const IPHONE_XS_13_6 = "iphone xs,13.6";
export const LG_STYLO_5_9 = "lg stylo 5,9";
export const LG_STYLO_6_10 = "lg stylo 6,10";
export const MOTO_G_4_7_0 = "moto g 4,7.0";
export const MOTO_G7_PLAY_9 = "moto g7 play,9";
export const NEXUS_7_NOT__2ND_GEN__WIFI__6_0 = "nexus 7 - 2nd gen (wifi),6.0";
export const ONEPLUS_8T_11 = "oneplus 8t,11";
export const PIXEL_2_XL_8_1_0 = "pixel 2 xl,8.1.0";
export const PIXEL_2_XL_9 = "pixel 2 xl,9";
export const PIXEL_5_11 = "pixel 5,11";
export const PIXEL_5_12 = "pixel 5,12";
export const PIXEL_XL_8_0_0 = "pixel xl,8.0.0";
export const PIXEL_7_1_2 = "pixel,7.1.2";
export const SAMSUNG_A51_10 = "samsung a51,10";
export const SAMSUNG_GALAXY_A10S_10 = "samsung galaxy a10s,10";
export const SAMSUNG_GALAXY_A13_5G_11 = "samsung galaxy a13 5g,11";
export const SAMSUNG_GALAXY_A53_5G_12 = "samsung galaxy a53 5g,12";
export const SAMSUNG_GALAXY_A7_8_0_0 = "samsung galaxy a7,8.0.0";
export const SAMSUNG_GALAXY_A71_11 = "samsung galaxy a71,11";
export const SAMSUNG_GALAXY_A73_5G_12 = "samsung galaxy a73 5g,12";
export const SAMSUNG_GALAXY_J7__2018__8_0_0 = "samsung galaxy j7 (2018),8.0.0";
export const SAMSUNG_GALAXY_NOTE20_11 = "samsung galaxy note20,11";
export const SAMSUNG_GALAXY_S20__UNLOCKED__10 =
  "samsung galaxy s20 (unlocked),10";
export const SAMSUNG_GALAXY_S20___UNLOCKED__10 =
  "samsung galaxy s20+ (unlocked),10";
export const SAMSUNG_GALAXY_S21_ULTRA_11 = "samsung galaxy s21 ultra,11";
export const SAMSUNG_GALAXY_S21_ULTRA_12 = "samsung galaxy s21 ultra,12";
export const SAMSUNG_GALAXY_S21__11 = "samsung galaxy s21+,11";
export const SAMSUNG_GALAXY_S21_11 = "samsung galaxy s21,11";
export const SAMSUNG_GALAXY_S21_12 = "samsung galaxy s21,12";
export const SAMSUNG_GALAXY_S22_5G_12 = "samsung galaxy s22 5g,12";
export const SAMSUNG_GALAXY_S22_5G_13 = "samsung galaxy s22 5g,13";
export const SAMSUNG_GALAXY_S22_ULTRA_5G_12 = "samsung galaxy s22 ultra 5g,12";
export const SAMSUNG_GALAXY_S22__5G_12 = "samsung galaxy s22+ 5g,12";
export const SAMSUNG_GALAXY_S23_ULTRA_13 = "samsung galaxy s23 ultra,13";
export const SAMSUNG_GALAXY_S23__13 = "samsung galaxy s23+,13";
export const SAMSUNG_GALAXY_S23_13 = "samsung galaxy s23,13";
export const SAMSUNG_GALAXY_S23_14 = "samsung galaxy s23,14";
export const SAMSUNG_GALAXY_TAB_A_10_1_10 = "samsung galaxy tab a 10.1,10";
export const SAMSUNG_GALAXY_TAB_A_10_1_7_0 = "samsung galaxy tab a 10.1,7.0";
export const SAMSUNG_GALAXY_TAB_A8__2021__11 =
  "samsung galaxy tab a8 (2021),11";
export const SAMSUNG_GALAXY_TAB_S4_8_1_0 = "samsung galaxy tab s4,8.1.0";
export const SAMSUNG_GALAXY_TAB_S6_9 = "samsung galaxy tab s6,9";
export const SAMSUNG_GALAXY_TAB_S7_11 = "samsung galaxy tab s7,11";
export const SAMSUNG_GALAXY_TAB_S8_12 = "samsung galaxy tab s8,12";
export const SAMSUNG_S20_ULTRA_10 = "samsung s20 ultra,10";
export const SONY_XPERIA_XZ3_9 = "sony xperia xz3,9";
export const XIAOMI_REDMI_NOTE_10_5G_11 = "xiaomi redmi note 10 5g,11";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_10TH_GEN_2022_IOS_16 =
  "synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_10TH_GEN_2022_IOS_17 =
  "synthetics:mobile:device:apple_ipad_10th_gen_2022_ios_17";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_9TH_GEN_2021_IOS_15 =
  "synthetics:mobile:device:apple_ipad_9th_gen_2021_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_AIR_2022_IOS_15 =
  "synthetics:mobile:device:apple_ipad_air_2022_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_MINI_5TH_GEN_IOS_14 =
  "synthetics:mobile:device:apple_ipad_mini_5th_gen_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_MINI_6TH_GEN_IOS_15 =
  "synthetics:mobile:device:apple_ipad_mini_6th_gen_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_11_2022_IOS_16 =
  "synthetics:mobile:device:apple_ipad_pro_11_2022_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_12_9_2020_IOS_14 =
  "synthetics:mobile:device:apple_ipad_pro_12_9_2020_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_12_9_2021_IOS_15 =
  "synthetics:mobile:device:apple_ipad_pro_12_9_2021_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPAD_PRO_12_9_2022_IOS_16 =
  "synthetics:mobile:device:apple_ipad_pro_12_9_2022_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_11_IOS_14 =
  "synthetics:mobile:device:apple_iphone_11_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_11_IOS_16 =
  "synthetics:mobile:device:apple_iphone_11_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_11_PRO_IOS_15 =
  "synthetics:mobile:device:apple_iphone_11_pro_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_IOS_14 =
  "synthetics:mobile:device:apple_iphone_12_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_IOS_15 =
  "synthetics:mobile:device:apple_iphone_12_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_IOS_16 =
  "synthetics:mobile:device:apple_iphone_12_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_MINI_IOS_14 =
  "synthetics:mobile:device:apple_iphone_12_mini_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_MINI_IOS_16 =
  "synthetics:mobile:device:apple_iphone_12_mini_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_PRO_IOS_14 =
  "synthetics:mobile:device:apple_iphone_12_pro_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_12_PRO_MAX_IOS_14 =
  "synthetics:mobile:device:apple_iphone_12_pro_max_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_MINI_IOS_15 =
  "synthetics:mobile:device:apple_iphone_13_mini_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_MINI_IOS_16 =
  "synthetics:mobile:device:apple_iphone_13_mini_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_PRO_IOS_15 =
  "synthetics:mobile:device:apple_iphone_13_pro_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_PRO_MAX_IOS_15 =
  "synthetics:mobile:device:apple_iphone_13_pro_max_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_13_PRO_MAX_IOS_17 =
  "synthetics:mobile:device:apple_iphone_13_pro_max_ios_17";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_IOS_16 =
  "synthetics:mobile:device:apple_iphone_14_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PLUS_IOS_16 =
  "synthetics:mobile:device:apple_iphone_14_plus_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PRO_IOS_16 =
  "synthetics:mobile:device:apple_iphone_14_pro_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PRO_IOS_17 =
  "synthetics:mobile:device:apple_iphone_14_pro_ios_17";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_14_PRO_MAX_IOS_16 =
  "synthetics:mobile:device:apple_iphone_14_pro_max_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_6_IOS_12 =
  "synthetics:mobile:device:apple_iphone_6_ios_12";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_8_IOS_13 =
  "synthetics:mobile:device:apple_iphone_8_ios_13";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_8_IOS_14 =
  "synthetics:mobile:device:apple_iphone_8_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_SE_2022_IOS_15 =
  "synthetics:mobile:device:apple_iphone_se_2022_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_APPLE_IPHONE_SE_2022_IOS_16 =
  "synthetics:mobile:device:apple_iphone_se_2022_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_GALAXY_A5_ANDROID_8 =
  "synthetics:mobile:device:galaxy_a5_android_8";
export const SYNTHETICS_MOBILE_DEVICE_GALAXY_NOTE5_ANDROID_7 =
  "synthetics:mobile:device:galaxy_note5_android_7";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_3A_XL_ANDROID_11 =
  "synthetics:mobile:device:google_pixel_3a_xl_android_11";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_4_UNLOCKED_ANDROID_11 =
  "synthetics:mobile:device:google_pixel_4_unlocked_android_11";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_4_XL_UNLOCKED_ANDROID_10 =
  "synthetics:mobile:device:google_pixel_4_xl_unlocked_android_10";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_4A_ANDROID_11 =
  "synthetics:mobile:device:google_pixel_4a_android_11";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_6_ANDROID_12 =
  "synthetics:mobile:device:google_pixel_6_android_12";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_6_PRO_ANDROID_12 =
  "synthetics:mobile:device:google_pixel_6_pro_android_12";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_6A_ANDROID_13 =
  "synthetics:mobile:device:google_pixel_6a_android_13";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_7_ANDROID_13 =
  "synthetics:mobile:device:google_pixel_7_android_13";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_7_ANDROID_14 =
  "synthetics:mobile:device:google_pixel_7_android_14";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_7_PRO_ANDROID_13 =
  "synthetics:mobile:device:google_pixel_7_pro_android_13";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_8_ANDROID_14 =
  "synthetics:mobile:device:google_pixel_8_android_14";
export const SYNTHETICS_MOBILE_DEVICE_GOOGLE_PIXEL_8_PRO_ANDROID_14 =
  "synthetics:mobile:device:google_pixel_8_pro_android_14";
export const SYNTHETICS_MOBILE_DEVICE_IPAD_AIR_2_IOS_13 =
  "synthetics:mobile:device:ipad_air_2_ios_13";
export const SYNTHETICS_MOBILE_DEVICE_IPAD_AIR_4TH_GEN_2020_IOS_14 =
  "synthetics:mobile:device:ipad_air_4th_gen_2020_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_13_IOS_15 =
  "synthetics:mobile:device:iphone_13_ios_15";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_13_IOS_16 =
  "synthetics:mobile:device:iphone_13_ios_16";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_15_IOS_17 =
  "synthetics:mobile:device:iphone_15_ios_17";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_15_PRO_IOS_17 =
  "synthetics:mobile:device:iphone_15_pro_ios_17";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_15_PRO_MAX_IOS_17 =
  "synthetics:mobile:device:iphone_15_pro_max_ios_17";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_SE_2020_IOS_13 =
  "synthetics:mobile:device:iphone_se_2020_ios_13";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_SE_2020_IOS_14 =
  "synthetics:mobile:device:iphone_se_2020_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_X_IOS_14 =
  "synthetics:mobile:device:iphone_x_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_XR_IOS_14 =
  "synthetics:mobile:device:iphone_xr_ios_14";
export const SYNTHETICS_MOBILE_DEVICE_IPHONE_XS_IOS_13 =
  "synthetics:mobile:device:iphone_xs_ios_13";
export const SYNTHETICS_MOBILE_DEVICE_LG_STYLO_6_ANDROID_10 =
  "synthetics:mobile:device:lg_stylo_6_android_10";
export const SYNTHETICS_MOBILE_DEVICE_PIXEL_5_ANDROID_12 =
  "synthetics:mobile:device:pixel_5_android_12";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_A51_ANDROID_10 =
  "synthetics:mobile:device:samsung_a51_android_10";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_A71_ANDROID_11 =
  "synthetics:mobile:device:samsung_galaxy_a71_android_11";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_NOTE20_ANDROID_11 =
  "synthetics:mobile:device:samsung_galaxy_note20_android_11";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_ANDROID_11 =
  "synthetics:mobile:device:samsung_galaxy_s21_android_11";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_ANDROID_12 =
  "synthetics:mobile:device:samsung_galaxy_s21_android_12";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_PLUS_ANDROID_11 =
  "synthetics:mobile:device:samsung_galaxy_s21_plus_android_11";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S21_ULTRA_ANDROID_11 =
  "synthetics:mobile:device:samsung_galaxy_s21_ultra_android_11";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_5G_ANDROID_12 =
  "synthetics:mobile:device:samsung_galaxy_s22_5g_android_12";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_5G_ANDROID_13 =
  "synthetics:mobile:device:samsung_galaxy_s22_5g_android_13";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_PLUS_5G_ANDROID_12 =
  "synthetics:mobile:device:samsung_galaxy_s22_plus_5g_android_12";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S22_ULTRA_5G_ANDROID_12 =
  "synthetics:mobile:device:samsung_galaxy_s22_ultra_5g_android_12";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_ANDROID_13 =
  "synthetics:mobile:device:samsung_galaxy_s23_android_13";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_ANDROID_14 =
  "synthetics:mobile:device:samsung_galaxy_s23_android_14";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_PLUS_ANDROID_13 =
  "synthetics:mobile:device:samsung_galaxy_s23_plus_android_13";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_PLUS_ANDROID_14 =
  "synthetics:mobile:device:samsung_galaxy_s23_plus_android_14";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_S23_ULTRA_ANDROID_13 =
  "synthetics:mobile:device:samsung_galaxy_s23_ultra_android_13";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_TAB_A_10_1_ANDROID_7 =
  "synthetics:mobile:device:samsung_galaxy_tab_a_10_1_android_7";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_TAB_S7_ANDROID_11 =
  "synthetics:mobile:device:samsung_galaxy_tab_s7_android_11";
export const SYNTHETICS_MOBILE_DEVICE_SAMSUNG_GALAXY_TAB_S8_ANDROID_12 =
  "synthetics:mobile:device:samsung_galaxy_tab_s8_android_12";
export const SYNTHETICS_MOBILE_DEVICE_XIAOMI_REDMI_NOTE_10_5G_ANDROID_11 =
  "synthetics:mobile:device:xiaomi_redmi_note_10_5g_android_11";
