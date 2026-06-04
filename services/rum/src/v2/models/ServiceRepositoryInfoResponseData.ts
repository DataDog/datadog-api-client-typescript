import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceRepositoryInfoDataType } from "./ServiceRepositoryInfoDataType";
import { ServiceRepositoryInfoResponseAttributes } from "./ServiceRepositoryInfoResponseAttributes";

/**
 * Data object for the service repository info response.
 */
export class ServiceRepositoryInfoResponseData {
  /**
   * Attributes of the service repository information.
   */
  "attributes": ServiceRepositoryInfoResponseAttributes;
  /**
   * The identifier composed of the service name and version.
   */
  "id": string;
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
      type: "ServiceRepositoryInfoResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ServiceRepositoryInfoResponseData.attributeTypeMap;
  }

  public constructor() {}
}
