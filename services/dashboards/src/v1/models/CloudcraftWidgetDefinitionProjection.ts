import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Projection used to render the Cloudcraft topology.
 */
export type CloudcraftWidgetDefinitionProjection =
  | typeof ISOMETRIC
  | typeof TWO_D
  | UnparsedObject;
export const ISOMETRIC = "isometric";
export const TWO_D = "2d";
