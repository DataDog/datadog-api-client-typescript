/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchMaintenanceRequestDataRelationshipsTemplate } from "./PatchMaintenanceRequestDataRelationshipsTemplate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The supported relationships for updating a maintenance.
 */
export class PatchMaintenanceRequestDataRelationships {
  /**
   * The template used to create the maintenance.
   */
  "template"?: PatchMaintenanceRequestDataRelationshipsTemplate;

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
    template: {
      baseName: "template",
      type: "PatchMaintenanceRequestDataRelationshipsTemplate",
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
    return PatchMaintenanceRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
