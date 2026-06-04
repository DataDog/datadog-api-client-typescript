import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceRepositoryInfoDataType } from "./ServiceRepositoryInfoDataType";
import { ServiceRepositoryInfoRequestAttributes } from "./ServiceRepositoryInfoRequestAttributes";

/**
 * Data object for the service repository info request.
 */
export class ServiceRepositoryInfoRequestData {
  /**
   * Attributes for the service repository info request.
   */
  "attributes": ServiceRepositoryInfoRequestAttributes;
  /**
   * The resource type for service repository info objects.
   */
  "type": ServiceRepositoryInfoDataType;
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
      type: "ServiceRepositoryInfoRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ServiceRepositoryInfoDataType",
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
    return ServiceRepositoryInfoRequestData.attributeTypeMap;
  }

  public constructor() {}
}
