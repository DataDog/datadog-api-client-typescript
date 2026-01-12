import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `parse_xml`.
 */
export type ObservabilityPipelineParseXMLProcessorType =
  | typeof PARSE_XML
  | UnparsedObject;
export const PARSE_XML = "parse_xml";
