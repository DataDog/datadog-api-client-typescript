/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsOnDemandHotspotsScalarMeta } from "./CommitmentsOnDemandHotspotsScalarMeta";
import { CommitmentsScalarColumn } from "./CommitmentsScalarColumn";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing scalar on-demand hot-spots data for cloud commitment programs.
 */
export class CommitmentsOnDemandHotspotsScalarResponse {
  /**
   * Array of scalar columns in the response.
   */
  "columns": Array<CommitmentsScalarColumn>;
  /**
   * Metadata for the on-demand hot-spots scalar response.
   */
  "meta"?: CommitmentsOnDemandHotspotsScalarMeta;
  /**
   * Array of scalar columns in the response.
   */
  "total": Array<CommitmentsScalarColumn>;

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
    columns: {
      baseName: "columns",
      type: "Array<CommitmentsScalarColumn>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "CommitmentsOnDemandHotspotsScalarMeta",
    },
    total: {
      baseName: "total",
      type: "Array<CommitmentsScalarColumn>",
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
    return CommitmentsOnDemandHotspotsScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
