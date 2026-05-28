/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieAccountCreateAttributes } from "./OpsgenieAccountCreateAttributes";
import { OpsgenieAccountType } from "./OpsgenieAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Opsgenie account data for a create request.
 */
export class OpsgenieAccountCreateData {
  /**
   * The Opsgenie account attributes for a create request.
   */
  "attributes": OpsgenieAccountCreateAttributes;
  /**
   * Opsgenie account resource type.
   */
  "type": OpsgenieAccountType;

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
      type: "OpsgenieAccountCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OpsgenieAccountType",
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
    return OpsgenieAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
