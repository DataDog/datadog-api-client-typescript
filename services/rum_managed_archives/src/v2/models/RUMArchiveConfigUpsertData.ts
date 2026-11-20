import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMArchiveConfigType } from "./RUMArchiveConfigType";
import { RUMArchiveConfigUpsertAttributes } from "./RUMArchiveConfigUpsertAttributes";

/**
 * JSON:API resource.
 */
export class RUMArchiveConfigUpsertData {
  /**
   * Archive configuration to save. When enabled is true, retention_days is required and must be 30, 90, or 180. When disabled, retention_days can be omitted.
   */
  "attributes": RUMArchiveConfigUpsertAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RUMArchiveConfigType;
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
      type: "RUMArchiveConfigUpsertAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMArchiveConfigType",
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
    return RUMArchiveConfigUpsertData.attributeTypeMap;
  }

  public constructor() {}
}
