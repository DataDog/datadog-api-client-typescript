/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Additional information related to your service account.
 */
export class GCPServiceAccountMeta {
  /**
   * The current list of projects accessible from your service account.
   */
  "accessibleProjects"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessibleProjects: {
      baseName: "accessible_projects",
      type: "Array<string>",
    },
  };
}
