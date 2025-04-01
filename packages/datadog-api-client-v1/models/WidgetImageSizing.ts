/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * How to size the image on the widget. The values are based on the image `object-fit` CSS properties.
 * **Note**: `zoom`, `fit` and `center` values are deprecated.
*/

export type WidgetImageSizing = typeof FILL| typeof CONTAIN| typeof COVER| typeof NONE| typeof SCALEDOWN| typeof ZOOM| typeof FIT| typeof CENTER | UnparsedObject;
export const FILL = 'fill';
export const CONTAIN = 'contain';
export const COVER = 'cover';
export const NONE = 'none';
export const SCALEDOWN = 'scale-down';
export const ZOOM = 'zoom';
export const FIT = 'fit';
export const CENTER = 'center';