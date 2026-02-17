/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImportResponseData } from "./IncidentImportResponseData";
import { IncidentImportResponseIncludedItem } from "./IncidentImportResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with an incident.
 */
export class IncidentImportResponse {
  /**
   * Incident data from an import response.
   */
  "data": IncidentImportResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentImportResponseIncludedItem>;

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
      type: "IncidentImportResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentImportResponseIncludedItem>",
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
    return IncidentImportResponse.attributeTypeMap;
  }

  public constructor() {}
}
