/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieAccountType } from "./OpsgenieAccountType";
import { OpsgenieAccountUpdateAttributes } from "./OpsgenieAccountUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Opsgenie account data for an update request.
 */
export class OpsgenieAccountUpdateData {
  /**
   * The Opsgenie account attributes for an update request.
   */
  "attributes": OpsgenieAccountUpdateAttributes;
  /**
   * The ID of the Opsgenie account.
   */
  "id": string;
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
      type: "OpsgenieAccountUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return OpsgenieAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
