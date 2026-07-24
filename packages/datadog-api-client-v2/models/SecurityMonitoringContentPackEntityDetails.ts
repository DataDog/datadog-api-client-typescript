/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringContentPackActivation } from "./SecurityMonitoringContentPackActivation";
import { SecurityMonitoringContentPackEntityDetailsType } from "./SecurityMonitoringContentPackEntityDetailsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details for an entity or identity content pack.
 */
export class SecurityMonitoringContentPackEntityDetails {
  /**
   * The activation status of a content pack.
   */
  "cpActivation": SecurityMonitoringContentPackActivation;
  /**
   * Type for entity content pack details.
   */
  "type": SecurityMonitoringContentPackEntityDetailsType;

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
    cpActivation: {
      baseName: "cp_activation",
      type: "SecurityMonitoringContentPackActivation",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringContentPackEntityDetailsType",
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
    return SecurityMonitoringContentPackEntityDetails.attributeTypeMap;
  }

  public constructor() {}
}
