import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { STIXIngestResponseAttributes } from "./STIXIngestResponseAttributes";
import { STIXIngestResponseType } from "./STIXIngestResponseType";

/**
 * The JSON:API resource describing the completed STIX ingestion request.
 */
export class STIXIngestResponseData {
  /**
   * Counters describing the result of the STIX ingestion request.
   */
  "attributes": STIXIngestResponseAttributes;
  /**
   * The normalized vendor identifier.
   */
  "id": string;
  /**
   * The STIX ingestion resource type.
   */
  "type": STIXIngestResponseType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "STIXIngestResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "STIXIngestResponseType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return STIXIngestResponseData.attributeTypeMap;
  }

  public constructor() {}
}
