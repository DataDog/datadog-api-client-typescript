/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagApprovalRequiredAttributes } from "./FeatureFlagApprovalRequiredAttributes";
import { FeatureFlagApprovalRequiredDataType } from "./FeatureFlagApprovalRequiredDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A proposed change requiring explicit submission through `CreateFlagSuggestion`.
 */
export class FeatureFlagApprovalRequired {
  /**
   * The change to submit for approval.
   */
  "attributes": FeatureFlagApprovalRequiredAttributes;
  /**
   * The ID of the feature flag. This is not a suggestion ID.
   */
  "id": string;
  /**
   * The resource type for an approval-required response.
   */
  "type": FeatureFlagApprovalRequiredDataType;

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
      type: "FeatureFlagApprovalRequiredAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "FeatureFlagApprovalRequiredDataType",
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
    return FeatureFlagApprovalRequired.attributeTypeMap;
  }

  public constructor() {}
}
