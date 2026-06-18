import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { VercelConfigAttributes } from "./VercelConfigAttributes";
import { VercelConfigDataResponseType } from "./VercelConfigDataResponseType";

/**
 * Vercel configuration data returned by the API.
 */
export class VercelConfigDataResponse {
  /**
   * Attributes of the Datadog Vercel integration configuration.
   */
  "attributes": VercelConfigAttributes;
  /**
   * Vercel configuration ID.
   */
  "id": string;
  /**
   * Type identifier for a Vercel configuration resource.
   */
  "type": VercelConfigDataResponseType;
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
      type: "VercelConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "VercelConfigDataResponseType",
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
    return VercelConfigDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
