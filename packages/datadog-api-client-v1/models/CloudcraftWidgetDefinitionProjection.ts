/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Projection used to render the Cloudcraft topology.
 */

export type CloudcraftWidgetDefinitionProjection =
  | typeof ISOMETRIC
  | typeof TWO_D
  | UnparsedObject;
export const ISOMETRIC = "isometric";
export const TWO_D = "2d";
