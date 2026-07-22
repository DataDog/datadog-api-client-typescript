/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Step type used in your mobile Synthetic test.
*/

export type SyntheticsMobileStepType = typeof ASSERTELEMENTCONTENT| typeof ASSERTSCREENCONTAINS| typeof ASSERTSCREENLACKS| typeof DOUBLETAP| typeof EXTRACTVARIABLE| typeof FLICK| typeof OPENDEEPLINK| typeof PLAYSUBTEST| typeof PRESSBACK| typeof RESTARTAPPLICATION| typeof ROTATE| typeof SCROLL| typeof SCROLLTOELEMENT| typeof TAP| typeof TOGGLEWIFI| typeof TYPETEXT| typeof WAIT | UnparsedObject;
export const ASSERTELEMENTCONTENT = 'assertElementContent';
export const ASSERTSCREENCONTAINS = 'assertScreenContains';
export const ASSERTSCREENLACKS = 'assertScreenLacks';
export const DOUBLETAP = 'doubleTap';
export const EXTRACTVARIABLE = 'extractVariable';
export const FLICK = 'flick';
export const OPENDEEPLINK = 'openDeeplink';
export const PLAYSUBTEST = 'playSubTest';
export const PRESSBACK = 'pressBack';
export const RESTARTAPPLICATION = 'restartApplication';
export const ROTATE = 'rotate';
export const SCROLL = 'scroll';
export const SCROLLTOELEMENT = 'scrollToElement';
export const TAP = 'tap';
export const TOGGLEWIFI = 'toggleWiFi';
export const TYPETEXT = 'typeText';
export const WAIT = 'wait';