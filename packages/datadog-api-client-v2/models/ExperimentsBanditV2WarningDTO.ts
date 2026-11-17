/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditV2WarningCode } from "./ExperimentsBanditV2WarningCode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A warning about the response that isn't an error.
 */
export class ExperimentsBanditV2WarningDTO {
  /**
   * Code that identifies the warning. `datadog_flag_configuration_omitted` means the caller lacks feature flag or environment read permissions, so the response leaves out `datadog_flag_configuration`.
   */
  "code": ExperimentsBanditV2WarningCode;
  /**
   * Explanation of the warning.
   */
  "detail": string;

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
    code: {
      baseName: "code",
      type: "ExperimentsBanditV2WarningCode",
      required: true,
    },
    detail: {
      baseName: "detail",
      type: "string",
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
    return ExperimentsBanditV2WarningDTO.attributeTypeMap;
  }

  public constructor() {}
}
