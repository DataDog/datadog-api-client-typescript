/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentRequestData } from "./DORADeploymentRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to create a DORA deployment event.
 */
export class DORADeploymentRequest {
  /**
   * The JSON:API data.
   */
  "data": DORADeploymentRequestData;

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
      type: "DORADeploymentRequestData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORADeploymentRequest.attributeTypeMap;
  }

  public constructor() {}
}
