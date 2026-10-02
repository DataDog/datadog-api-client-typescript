/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchSubjectTypeV2RequestData } from "./ExperimentsPatchSubjectTypeV2RequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to update the subject type.
 */
export class ExperimentsPatchSubjectTypeV2Request {
  /**
   * JSON:API resource containing the subject type identity and fields.
   */
  "data": ExperimentsPatchSubjectTypeV2RequestData;

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
      type: "ExperimentsPatchSubjectTypeV2RequestData",
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
    return ExperimentsPatchSubjectTypeV2Request.attributeTypeMap;
  }

  public constructor() {}
}
