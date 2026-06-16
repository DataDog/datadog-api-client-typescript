/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipFeedbackRequestAttributes } from "./OwnershipFeedbackRequestAttributes";
import { OwnershipFeedbackType } from "./OwnershipFeedbackType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data wrapper for an ownership feedback request.
 */
export class OwnershipFeedbackRequestData {
  /**
   * The attributes of an ownership feedback request.
   */
  "attributes": OwnershipFeedbackRequestAttributes;
  /**
   * The type of the ownership feedback request resource. The value should always be `ownership_feedback`.
   */
  "type": OwnershipFeedbackType;

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
      type: "OwnershipFeedbackRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipFeedbackType",
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
    return OwnershipFeedbackRequestData.attributeTypeMap;
  }

  public constructor() {}
}
