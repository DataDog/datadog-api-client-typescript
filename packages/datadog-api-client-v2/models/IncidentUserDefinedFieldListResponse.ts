/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedFieldListMeta } from "./IncidentUserDefinedFieldListMeta";
import { IncidentUserDefinedFieldResponseData } from "./IncidentUserDefinedFieldResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of incident user-defined fields.
 */
export class IncidentUserDefinedFieldListResponse {
  /**
   * An array of user-defined field objects.
   */
  "data": Array<IncidentUserDefinedFieldResponseData>;
  /**
   * Pagination metadata for the user-defined field list response.
   */
  "meta": IncidentUserDefinedFieldListMeta;

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
      type: "Array<IncidentUserDefinedFieldResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "IncidentUserDefinedFieldListMeta",
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
    return IncidentUserDefinedFieldListResponse.attributeTypeMap;
  }

  public constructor() {}
}
