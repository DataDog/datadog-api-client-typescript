/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansListRequestData } from "./SpansListRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The request for a spans list.
 */
export class SpansListRequest {
  /**
   * The object containing the query content.
   */
  "data"?: SpansListRequestData;

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
      type: "SpansListRequestData",
    },
  };
}
