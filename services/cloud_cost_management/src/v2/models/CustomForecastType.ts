import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the custom forecast resource. Must be `custom_forecast`.
 */
export type CustomForecastType = typeof CUSTOM_FORECAST | UnparsedObject;
export const CUSTOM_FORECAST = "custom_forecast";
