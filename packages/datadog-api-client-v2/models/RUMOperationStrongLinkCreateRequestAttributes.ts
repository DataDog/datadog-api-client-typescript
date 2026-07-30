/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMOperationStrongLinkStatus } from "./RUMOperationStrongLinkStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a RUM operation strong link.
 */
export class RUMOperationStrongLinkCreateRequestAttributes {
  /**
   * The RUM application ID used when creating a stub operation from `operation_name`.
   */
  "applicationId"?: string;
  /**
   * A description of the strong link.
   */
  "description"?: string;
  /**
   * The unique identifier of the feature to link.
   */
  "featureId": string;
  /**
   * The unique identifier of the RUM operation to link. Either `operation_id` or
   * `operation_name` is required.
   */
  "operationId"?: string;
  /**
   * The name of the RUM operation to link. Either `operation_id` or `operation_name` is
   * required. If no operation with this name exists, a stub operation is created.
   */
  "operationName"?: string;
  /**
   * The status of a RUM operation strong link.
   */
  "status"?: RUMOperationStrongLinkStatus;
  /**
   * A list of tags associated with the strong link.
   */
  "tags"?: Array<string>;

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
    applicationId: {
      baseName: "application_id",
      type: "string",
      format: "uuid",
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
    },
    operationName: {
      baseName: "operation_name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "RUMOperationStrongLinkStatus",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return RUMOperationStrongLinkCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
