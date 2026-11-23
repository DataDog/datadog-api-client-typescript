/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsSavingsScalarResponseData } from "./CommitmentsSavingsScalarResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing scalar savings metrics for cloud commitment programs.
 */
export class CommitmentsSavingsScalarResponse {
  /**
   * The scalar savings resource.
   */
  "data": CommitmentsSavingsScalarResponseData;

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
      type: "CommitmentsSavingsScalarResponseData",
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
    return CommitmentsSavingsScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
