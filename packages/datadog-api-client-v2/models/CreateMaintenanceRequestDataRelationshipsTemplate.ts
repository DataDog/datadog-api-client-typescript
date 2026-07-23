/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateMaintenanceRequestDataRelationshipsTemplateData } from "./CreateMaintenanceRequestDataRelationshipsTemplateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The template used to create the maintenance.
 */
export class CreateMaintenanceRequestDataRelationshipsTemplate {
  /**
   * The data object identifying the template used to create the maintenance.
   */
  "data": CreateMaintenanceRequestDataRelationshipsTemplateData;

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
      type: "CreateMaintenanceRequestDataRelationshipsTemplateData",
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
    return CreateMaintenanceRequestDataRelationshipsTemplate.attributeTypeMap;
  }

  public constructor() {}
}
