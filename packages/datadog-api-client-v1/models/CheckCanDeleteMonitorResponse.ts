/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CheckCanDeleteMonitorResponseData } from "./CheckCanDeleteMonitorResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response of monitor IDs that can or can't be safely deleted.
 */
export class CheckCanDeleteMonitorResponse {
  /**
   * Wrapper object with the list of monitor IDs.
   */
  "data": CheckCanDeleteMonitorResponseData;
  /**
   * A mapping of Monitor ID to strings denoting where it's used.
   */
  "errors"?: { [key: string]: Array<string> };

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
      type: "CheckCanDeleteMonitorResponseData",
      required: true,
    },
    errors: {
      baseName: "errors",
      type: "{ [key: string]: Array<string>; }",
    },
  };
}
