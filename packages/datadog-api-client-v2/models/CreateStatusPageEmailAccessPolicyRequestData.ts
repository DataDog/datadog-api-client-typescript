/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateStatusPageEmailAccessPolicyRequestDataAttributes } from "./CreateStatusPageEmailAccessPolicyRequestDataAttributes";
import { StatusPageEmailAccessPolicyType } from "./StatusPageEmailAccessPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object for creating a status page email access policy.
 */
export class CreateStatusPageEmailAccessPolicyRequestData {
  /**
   * Attributes for creating a status page email access policy.
   */
  "attributes": CreateStatusPageEmailAccessPolicyRequestDataAttributes;
  /**
   * Status page email access policy resource type.
   */
  "type": StatusPageEmailAccessPolicyType;

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
      type: "CreateStatusPageEmailAccessPolicyRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StatusPageEmailAccessPolicyType",
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
    return CreateStatusPageEmailAccessPolicyRequestData.attributeTypeMap;
  }

  public constructor() {}
}
