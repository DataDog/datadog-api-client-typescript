/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DegradationIncluded } from "./DegradationIncluded";
import { MaintenanceTemplateData } from "./MaintenanceTemplateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object for a single maintenance template.
 */
export class MaintenanceTemplate {
  /**
   * The data object for a maintenance template.
   */
  "data"?: MaintenanceTemplateData;
  /**
   * The included related resources of a maintenance template. Client must explicitly request these resources by name in the `include` query parameter.
   */
  "included"?: Array<DegradationIncluded>;

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
      type: "MaintenanceTemplateData",
    },
    included: {
      baseName: "included",
      type: "Array<DegradationIncluded>",
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
    return MaintenanceTemplate.attributeTypeMap;
  }

  public constructor() {}
}
