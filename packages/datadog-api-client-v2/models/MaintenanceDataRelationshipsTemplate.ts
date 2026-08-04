/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceDataRelationshipsTemplateData } from "./MaintenanceDataRelationshipsTemplateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The template the maintenance was created from.
 */
export class MaintenanceDataRelationshipsTemplate {
  /**
   * The data object identifying the template the maintenance was created from.
   */
  "data": MaintenanceDataRelationshipsTemplateData;

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
    data: {
      baseName: "data",
      type: "MaintenanceDataRelationshipsTemplateData",
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
    return MaintenanceDataRelationshipsTemplate.attributeTypeMap;
  }

  public constructor() {}
}
