/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type OrchestrationView =
  | typeof SERVICE
  | typeof CLUSTER
  | typeof JOB
  | typeof NODE
  | typeof DEPLOYMENT
  | typeof NAMESPACE
  | typeof POD
  | typeof GENERICWORKLOAD
  | typeof INFERENCEWORKLOAD
  | typeof REPLICASET
  | typeof CRONJOB
  | typeof DAEMONSET
  | typeof STATEFULSET
  | typeof PERSISTENTVOLUME
  | typeof PERSISTENTVOLUMECLAIM
  | typeof ROLE
  | typeof ROLEBINDING
  | typeof CLUSTERROLE
  | typeof CLUSTERROLEBINDING
  | typeof SERVICEACCOUNT
  | typeof INGRESS
  | typeof CONFIGMAP
  | typeof VERTICALPODAUTOSCALER
  | typeof HORIZONTALPODAUTOSCALER
  | typeof CRD
  | typeof CR
  | typeof NETWORKPOLICY
  | typeof PODDISRUPTIONBUDGET
  | typeof ECSTASK
  | typeof ECSTASKDEFINITION
  | typeof ECSDAEMONTASKDEFINITION
  | typeof ECSSERVICE
  | typeof ECSDAEMON
  | typeof ECSCLUSTER
  | typeof ECSCONTAINERINSTANCE
  | UnparsedObject;
export const SERVICE = "service";
export const CLUSTER = "cluster";
export const JOB = "job";
export const NODE = "node";
export const DEPLOYMENT = "deployment";
export const NAMESPACE = "namespace";
export const POD = "pod";
export const GENERICWORKLOAD = "genericWorkload";
export const INFERENCEWORKLOAD = "inferenceWorkload";
export const REPLICASET = "replicaSet";
export const CRONJOB = "cronJob";
export const DAEMONSET = "daemonSet";
export const STATEFULSET = "statefulSet";
export const PERSISTENTVOLUME = "persistentVolume";
export const PERSISTENTVOLUMECLAIM = "persistentVolumeClaim";
export const ROLE = "role";
export const ROLEBINDING = "roleBinding";
export const CLUSTERROLE = "clusterRole";
export const CLUSTERROLEBINDING = "clusterRoleBinding";
export const SERVICEACCOUNT = "serviceAccount";
export const INGRESS = "ingress";
export const CONFIGMAP = "configMap";
export const VERTICALPODAUTOSCALER = "verticalPodAutoscaler";
export const HORIZONTALPODAUTOSCALER = "horizontalPodAutoscaler";
export const CRD = "crd";
export const CR = "cr";
export const NETWORKPOLICY = "networkPolicy";
export const PODDISRUPTIONBUDGET = "podDisruptionBudget";
export const ECSTASK = "ecsTask";
export const ECSTASKDEFINITION = "ecsTaskDefinition";
export const ECSDAEMONTASKDEFINITION = "ecsDaemonTaskDefinition";
export const ECSSERVICE = "ecsService";
export const ECSDAEMON = "ecsDaemon";
export const ECSCLUSTER = "ecsCluster";
export const ECSCONTAINERINSTANCE = "ecsContainerInstance";
