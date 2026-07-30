import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMOperationStrongLinkStatus } from "./RUMOperationStrongLinkStatus";

/**
 * Attributes of a RUM operation strong link response.
 */
export class RUMOperationStrongLinkResponseAttributes {
  /**
   * The timestamp when the strong link was created.
   */
  "createdAt"?: Date;
  /**
   * A description of the strong link.
   */
  "description"?: string;
  /**
   * The unique identifier of the linked feature.
   */
  "featureId": string;
  /**
   * The unique identifier of the linked RUM operation.
   */
  "operationId": string;
  /**
   * The status of a RUM operation strong link.
   */
  "status": RUMOperationStrongLinkStatus;
  /**
   * A list of tags associated with the strong link.
   */
  "tags"?: Array<string>;
  /**
   * The timestamp when the strong link was last updated.
   */
  "updatedAt"?: Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    featureId: {
      baseName: "feature_id",
      type: "string",
      required: true,
    },
    operationId: {
      baseName: "operation_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "RUMOperationStrongLinkStatus",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
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
    return RUMOperationStrongLinkResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
