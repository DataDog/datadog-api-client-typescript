/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExposureSQLModelV2RequestData } from "./ExperimentsCreateExposureSQLModelV2RequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to create a SQL model for experiment assignment data.
 */
export class ExperimentsCreateExposureSQLModelV2Request {
  /**
   * Exposure SQL model resource to create.
   */
  "data": ExperimentsCreateExposureSQLModelV2RequestData;

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
      type: "ExperimentsCreateExposureSQLModelV2RequestData",
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
    return ExperimentsCreateExposureSQLModelV2Request.attributeTypeMap;
  }

  public constructor() {}
}
