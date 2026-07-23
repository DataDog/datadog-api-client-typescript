/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceTemplateDataRelationshipsStatusPageData } from "./MaintenanceTemplateDataRelationshipsStatusPageData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The status page the maintenance template belongs to.
 */
export class MaintenanceTemplateDataRelationshipsStatusPage {
  /**
   * The data object identifying the status page associated with a maintenance template.
   */
  "data": MaintenanceTemplateDataRelationshipsStatusPageData;

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
      type: "MaintenanceTemplateDataRelationshipsStatusPageData",
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
    return MaintenanceTemplateDataRelationshipsStatusPage.attributeTypeMap;
  }

  public constructor() {}
}
