/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Size of the individual graphs in the split.
*/

export type SplitGraphVizSize = typeof XS| typeof SM| typeof MD| typeof LG | UnparsedObject;
export const XS = 'xs';
export const SM = 'sm';
export const MD = 'md';
export const LG = 'lg';