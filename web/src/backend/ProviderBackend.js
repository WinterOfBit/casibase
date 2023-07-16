// Copyright 2023 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Setting from "../Setting";

export function getGlobalProviders() {
  return fetch(`${Setting.ServerUrl}/api/get-global-providers`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function getProviders(owner) {
  return fetch(`${Setting.ServerUrl}/api/get-providers?owner=${owner}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function getProvider(owner, name) {
  return fetch(`${Setting.ServerUrl}/api/get-provider?id=${owner}/${encodeURIComponent(name)}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function getProviderGraph(owner, name, clusterNumber, distanceLimit) {
  return fetch(`${Setting.ServerUrl}/api/get-provider-graph?id=${owner}/${encodeURIComponent(name)}&clusterNumber=${clusterNumber}&distanceLimit=${distanceLimit}`, {
    method: "GET",
    credentials: "include",
  }).then(res => res.json());
}

export function updateProvider(owner, name, provider) {
  const newProvider = Setting.deepCopy(provider);
  return fetch(`${Setting.ServerUrl}/api/update-provider?id=${owner}/${encodeURIComponent(name)}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(newProvider),
  }).then(res => res.json());
}

export function addProvider(provider) {
  const newProvider = Setting.deepCopy(provider);
  return fetch(`${Setting.ServerUrl}/api/add-provider`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(newProvider),
  }).then(res => res.json());
}

export function deleteProvider(provider) {
  const newProvider = Setting.deepCopy(provider);
  return fetch(`${Setting.ServerUrl}/api/delete-provider`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(newProvider),
  }).then(res => res.json());
}
