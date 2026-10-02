/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExposureSQLModelV2DTOData } from "./ExperimentsExposureSQLModelV2DTOData";
import { ExperimentsUpdateExposureSQLModelV2ResponseMeta } from "./ExperimentsUpdateExposureSQLModelV2ResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updated exposure SQL model and its removed entries.
 */
export class ExperimentsUpdateExposureSQLModelV2Response {
  /**
   * Exposure SQL model resource with its identifier and configuration.
   */
  "data": ExperimentsExposureSQLModelV2DTOData;
  /**
   * Removed model entries. Present only when the update removes an entry.
   */
  "meta"?: ExperimentsUpdateExposureSQLModelV2ResponseMeta;

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
      type: "ExperimentsExposureSQLModelV2DTOData",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ExperimentsUpdateExposureSQLModelV2ResponseMeta",
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
    return ExperimentsUpdateExposureSQLModelV2Response.attributeTypeMap;
  }

  public constructor() {}
}
