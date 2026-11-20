import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryRequestAttributes } from "./RUMRecoveryRequestAttributes";
import { RUMRecoveryRequestType } from "./RUMRecoveryRequestType";

/**
 * JSON:API resource.
 */
export class RUMRecoveryRequestData {
  /**
   * Recovery progress. Batch-only attributes are omitted for targeted requests; request_type is also omitted for targeted requests.
   */
  "attributes": RUMRecoveryRequestAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RUMRecoveryRequestType;
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
      type: "RUMRecoveryRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMRecoveryRequestType",
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
    return RUMRecoveryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
